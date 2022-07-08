import { Injectable, Inject } from '@nestjs/common';
import * as _ from 'lodash';
import { MasterConditionOfSale } from './entity'
import { Repository } from 'typeorm'
import { TOKENS } from '../../constants'

@Injectable()
export class MasterConditionOfSaleService {

  constructor(@Inject(TOKENS.ProjectRepositoryToken) private readonly dataModel: Repository<MasterConditionOfSale>) {

  }

  async getList(): Promise<any> {
    return await this.dataModel.find({ order: { rowOrder: 'ASC' } });;
  }

  async getById(id: any): Promise<any> {
    return await this.dataModel.findOne({ where: { id: id }, order: { rowOrder: 'ASC' } });;
  }

  async create(data?: any) {
    return await this.dataModel.save(data);
  }

  async update(data: any) {
    return this.dataModel.save({...data,  id: data.id });
  }

  async delete(id: any) {
    return await this.dataModel.delete({ id: id });
  }

}