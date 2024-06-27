import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '@prisma/client';

export class PatientResponseDto implements Omit<Patient, 'id'> {
  name: string;
  surname: string;
  gender: string;
  dni: number;
  phone: number;
  adress: string;
  pEmail: string;
  @ApiProperty()
  appointmentList: {
    date: Date;
    dentist: {
      name: string;
      surname: string;
    };
  }[];
}