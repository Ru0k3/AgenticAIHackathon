import { Hospital } from '../schemas/hospital.schema.js';
import { Specialty } from '../schemas/specialty.schema.js';
import { Doctor } from '../schemas/doctor.schema.js';
import { PatientHistory } from '../schemas/patient-history.schema.js';
export declare class DataService {
    private seedData;
    private loadSeedData;
    getHospitals(): Hospital[];
    getHospitalById(id: string): Hospital | undefined;
    getSpecialties(): Specialty[];
    getSpecialtyById(id: string): Specialty | undefined;
    getDoctors(): Doctor[];
    getDoctorsBySpecialty(specialtyId: string): Doctor[];
    getDoctorsByHospital(hospitalId: string): Doctor[];
    getPatientHistories(): PatientHistory[];
    getPatientHistoryById(patientId: string): PatientHistory | undefined;
}
//# sourceMappingURL=data.service.d.ts.map