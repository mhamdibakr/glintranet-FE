import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Availability } from 'app/main/CvTech/models/availability.model';
import { Campaign } from 'app/main/CvTech/models/campaign.model';
import { Candidat } from 'app/main/CvTech/models/candidat.model';
import { CurrentSituation } from 'app/main/CvTech/models/current-situation.model';
import { Education } from 'app/main/CvTech/models/education.model';
import { Function } from 'app/main/CvTech/models/function.model';
import { GlobalExperience } from 'app/main/CvTech/models/global-experience.model';
import { Postulation } from 'app/main/CvTech/models/postulation.model';
import { Skills } from 'app/main/CvTech/models/skills.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/cvtheque';

@Injectable({
  providedIn: 'root'
})
export class CvTechService {

  constructor(private httpClient: HttpClient) { }

  //availablity
  //availablity
  getAvailabilities(): Observable<Availability[]> {
    return this.httpClient.get<Availability[]>(`${baseUrl}/availablity`);
  }

  getAvailability(id: number): Observable<Availability> {
    return this.httpClient.get<Availability>(`${baseUrl}/availablity/${id}`);
  }

  createAvailability(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/availablity`, data);
  }

  updateAvailability(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/availablity/${id}`, data);
  }

  deleteAvailability(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/availablity/${id}`, { responseType: 'text' });
  }


  //campaign
  //campaign
  getCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${baseUrl}/campaign`);
  }

  getCampaign(id: number): Observable<Campaign> {
    return this.httpClient.get<Campaign>(`${baseUrl}/campaign/${id}`);
  }

  createCampaign(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/campaign`, data);
  }

  updateCampaign(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/campaign/${id}`, data);
  }

  deleteCampaign(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/campaign/${id}`, { responseType: 'text' });
  }


  //candidat
  //candidat
  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(`${baseUrl}/candidat`);
  }

  getCandidat(id: number): Observable<Candidat> {
    return this.httpClient.get<Candidat>(`${baseUrl}/candidat/${id}`);
  }

  createCandidat(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/candidat`, data);
  }

  updateCandidat(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/candidat/${id}`, data);
  }

  deleteCandidat(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/candidat/${id}`, { responseType: 'text' });
  }


  //Current-situation
  //Current-situation
  getCurrentSituations(): Observable<CurrentSituation[]> {
    return this.httpClient.get<CurrentSituation[]>(`${baseUrl}/situation`);
  }

  getCurrentSituation(id: number): Observable<CurrentSituation> {
    return this.httpClient.get<CurrentSituation>(`${baseUrl}/situation/${id}`);
  }

  createCurrentSituation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/situation`, data);
  }

  updateCurrentSituation(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/situation/${id}`, data);
  }

  deleteCurrentSituation(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/situation/${id}`, { responseType: 'text' });
  }


  //education
  //education
  getEducations(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(`${baseUrl}/education`);
  }

  getEducation(id: number): Observable<Education> {
    return this.httpClient.get<Education>(`${baseUrl}/education/${id}`);
  }

  createEducation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/education`, data);
  }

  updateEducation(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/education/${id}`, data);
  }

  deleteEducation(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/education/${id}`, { responseType: 'text' });
  }

  //functions
  //functions
  getFunctions(): Observable<Function[]> {
    return this.httpClient.get<Function[]>(`${baseUrl}/function`);
  }

  getFunction(id: number): Observable<Function> {
    return this.httpClient.get<Function>(`${baseUrl}/function/${id}`);
  }

  createFunction(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/function`, data);
  }

  updateFunction(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/function/${id}`, data);
  }

  deleteFunction(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/function/${id}`, { responseType: 'text' });
  }

  //Globale-experience
  //Globale-experience
  getGlobaleExperiences(): Observable<GlobalExperience[]> {
    return this.httpClient.get<GlobalExperience[]>(`${baseUrl}/experience`);
  }

  getGlobaleExperience(id: number): Observable<GlobalExperience> {
    return this.httpClient.get<GlobalExperience>(`${baseUrl}/experience/${id}`);
  }

  createGlobaleExperience(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/experience`, data);
  }

  updateGlobaleExperience(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/experience/${id}`, data);
  }

  deleteGlobaleExperience(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/experience/${id}`, { responseType: 'text' });
  }

  //postulation
  //postulation
  getProfiles(): Observable<Postulation[]> {
    return this.httpClient.get<Postulation[]>(`${baseUrl}/postulation`);
  }

  getProfile(id: number): Observable<Postulation> {
    return this.httpClient.get<Postulation>(`${baseUrl}/postulation/${id}`);
  }

  createProfile(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/postulation`, data);
  }

  updateProfile(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/postulation/${id}`, data);
  }

  deleteProfile(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/postulation/${id}`, { responseType: 'text' });
  }


  //skills
  //skills
  getSkills(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(`${baseUrl}/skills`);
  }

  getSkill(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(`${baseUrl}/skills/${id}`);
  }

  createSkill(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/skills`, data);
  }

  updateSkill(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/skills/${id}`, data);
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/skills/${id}`, { responseType: 'text' });
  }
}
