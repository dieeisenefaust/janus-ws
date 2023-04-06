import { Injectable } from '@nestjs/common';
import { CreateTimespanDto } from './dto/create-timespan.dto';
import { UpdateTimespanDto } from './dto/update-timespan.dto';

@Injectable()
export class TimespanService {
  create(createTimespanDto: CreateTimespanDto) {
    return 'This action adds a new timespan';
  }

  findAll() {
    return `This action returns all timespan`;
  }

  findOne(id: string) {
    return `This action returns a #${id} timespan`;
  }

  update(id: string, updateTimespanDto: UpdateTimespanDto) {
    return `This action updates a #${id} timespan`;
  }

  remove(id: string) {
    return `This action removes a #${id} timespan`;
  }
}
