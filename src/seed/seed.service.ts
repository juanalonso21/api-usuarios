import { Injectable, Logger } from '@nestjs/common';
import * as seed from './seed.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../clientes/entities/cliente.entity';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  /**
   * Inserta los registros del seed.json.
   * Evita duplicados comprobando el NIF (clave primaria).
   */
  async runSeed(): Promise<{ inserted: number; skipped: number; errors: any[] }> {
    const inserted: string[] = [];
    const skipped: string[] = [];
    const errors: any[] = [];

    for (const c of seed) {
      try {
        const exists = await this.clientesRepository.findOne({ where: { nif: c.nif } });
        if (exists) {
          skipped.push(c.nif);
          this.logger.log(`Omitido (ya existe): ${c.nif} - ${c.nombre}`);
          continue;
        }

        const cliente = this.clientesRepository.create(c as Partial<Cliente>);
        await this.clientesRepository.save(cliente);
        inserted.push(c.nif);
        this.logger.log(`Insertado: ${c.nif} - ${c.nombre}`);
      } catch (err) {
        errors.push({ nif: c?.nif, error: err?.message ?? err });
        this.logger.error(`Error insertando ${c?.nif}: ${err?.message ?? err}`);
      }
    }

    return { inserted: inserted.length, skipped: skipped.length, errors };
  }
}
