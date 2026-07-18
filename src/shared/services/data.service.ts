import { Injectable } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';
import { Hospital } from '../schemas/hospital.schema.js';
import { Specialty } from '../schemas/specialty.schema.js';
import { Doctor } from '../schemas/doctor.schema.js';
import { PatientHistory } from '../schemas/patient-history.schema.js';

interface SeedData {
  hospitals: Hospital[];
  specialties: Specialty[];
  doctors: Doctor[];
  patientHistories: PatientHistory[];
}

@Injectable()
export class DataService {
  private seedData: SeedData | null = null;

  private loadSeedData(): SeedData {
    if (this.seedData) {
      return this.seedData;
    }

    const seedPath = path.join(process.cwd(), 'fixtures', 'seed.json');
    const rawData = fs.readFileSync(seedPath, 'utf-8');
    this.seedData = JSON.parse(rawData) as SeedData;
    return this.seedData;
  }

  getHospitals(): Hospital[] {
    const data = this.loadSeedData();
    return data.hospitals;
  }

  getHospitalById(id: string): Hospital | undefined {
    const data = this.loadSeedData();
    return data.hospitals.find((h) => h.id === id);
  }

  getSpecialties(): Specialty[] {
    const data = this.loadSeedData();
    return data.specialties;
  }

  getSpecialtyById(id: string): Specialty | undefined {
    const data = this.loadSeedData();
    return data.specialties.find((s) => s.id === id);
  }

  getDoctors(): Doctor[] {
    const data = this.loadSeedData();
    return data.doctors;
  }

  getDoctorsBySpecialty(specialtyId: string): Doctor[] {
    const data = this.loadSeedData();
    return data.doctors.filter((d) => d.specialty === specialtyId);
  }

  getDoctorsByHospital(hospitalId: string): Doctor[] {
    const data = this.loadSeedData();
    return data.doctors.filter((d) => d.hospital === hospitalId);
  }

  getPatientHistories(): PatientHistory[] {
    const data = this.loadSeedData();
    return data.patientHistories;
  }

  getPatientHistoryById(patientId: string): PatientHistory | undefined {
    const data = this.loadSeedData();
    return data.patientHistories.find((ph) => ph.patientId === patientId);
  }
}
