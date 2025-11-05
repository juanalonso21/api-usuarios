import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) 
    private readonly clientesRepository: Repository<Cliente>
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.clientesRepository.create(createClienteDto);
    await this.clientesRepository.save(cliente);
    return {
      status: 201,
      message: 'Cliente creado correctamente',
      data: cliente
    };
  }

  async findAll() {
    const clientes = await this.clientesRepository.find();
    return {
      status: 200,
      message: 'Lista de clientes recuperada',
      data: clientes
    };
  }

  async findOne(nif: string) {
    const cliente = await this.clientesRepository.findOne({ where: { nif } });
    if (!cliente) {
      throw new NotFoundException(`Cliente con NIF ${nif} no encontrado`);
    }
    return {
      status: 200,
      message: 'Cliente encontrado',
      data: cliente
    };
  }

  async update(nif: string, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clientesRepository.findOne({ where: { nif } });
    if (!cliente) {
      throw new NotFoundException(`Cliente con NIF ${nif} no encontrado`);
    }
    
    await this.clientesRepository.update(nif, updateClienteDto);
    const clienteActualizado = await this.clientesRepository.findOne({ where: { nif } });
    
    return {
      status: 200,
      message: 'Cliente actualizado correctamente',
      data: clienteActualizado
    };
  }

  async remove(nif: string) {
    const cliente = await this.clientesRepository.findOne({ where: { nif } });
    if (!cliente) {
      throw new NotFoundException(`Cliente con NIF ${nif} no encontrado`);
    }
    
    await this.clientesRepository.remove(cliente);
    return {
      status: 200,
      message: 'Cliente eliminado correctamente',
      data: null
    };
  }
}
