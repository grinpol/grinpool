import { Patient } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PatientRequestDto implements Omit<Patient, 'id'> {
  @ApiProperty()
  age: number;

  @ApiProperty()
  floor: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  locality: string;

  @ApiProperty()
  establishment: string;

  @ApiProperty()
  socialWork: string;

  @ApiProperty()
  apartment: string;

  @ApiProperty()
  birthDate: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  pEmail: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  dni: number;

  @ApiProperty()
  odontograma: string | null;
}
