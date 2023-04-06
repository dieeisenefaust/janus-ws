import { IsNotEmpty } from 'class-validator';

export class CreateTimespanDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  job: string;

  @IsNotEmpty()
  task: string;

  intervalString: string;
  deleted: boolean;
}
