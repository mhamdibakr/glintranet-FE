import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Availability } from 'app/main/CvTech/models/availability.model';
import { Campaign } from 'app/main/CvTech/models/campaign.model';
import { Candidat } from 'app/main/CvTech/models/candidat.model';
import { CurrentSituation } from 'app/main/CvTech/models/current-situation.model';
import { Education } from 'app/main/CvTech/models/education.model';
import { Function } from 'app/main/CvTech/models/function.model';
import { GlobalExperience } from 'app/main/CvTech/models/global-experience.model';
import { Profile } from 'app/main/CvTech/models/profile.model';
import { Skills } from 'app/main/CvTech/models/skills.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/cvtheque';

@Injectable({
  providedIn: 'root'
})
export class CvTechService {

  constructor(private httpClient:HttpClient) { }

  //Availability
  //Availability
  getAvailabilities(): Observable<Availability[]> {
    return this.httpClient.get<Availability[]>(`${baseUrl}/Availability`);
  }

  getAvailability(id: number): Observable<Availability> {  
    return this.httpClient.get<Availability>(`${baseUrl}/Availability/${id}`);  
  }  

  createAvailability(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Availability/add`, data);
  }

  updateAvailability(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Availability/edit/${id}`, data);
  }

  deleteMovieAvailability(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Availability/${id}`, { responseType: 'text' });  
  }  


  //Campaign
  //Campaign
  getCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${baseUrl}/Campaign`);
  }

  getCampaign(id: number): Observable<Campaign> {  
    return this.httpClient.get<Campaign>(`${baseUrl}/Campaign/${id}`);  
  }  

  createCampaign(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Campaign/add`, data);
  }

  updateCampaign(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Campaign/edit/${id}`, data);
  }

  deleteCampaign(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Campaign/${id}`, { responseType: 'text' });  
  }  
  

  //Candidat
  //Candidat
  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(`${baseUrl}/Candidat`);
  }

  getCandidat(id: number): Observable<Candidat> {  
    return this.httpClient.get<Candidat>(`${baseUrl}/Candidat/${id}`);  
  }  

  createCandidat(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Candidat/add`, data);
  }

  updateCandidat(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Candidat/edit/${id}`, data);
  }

  deleteCandidat(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Candidat/${id}`, { responseType: 'text' });  
  }  
  

  //Current-situation
  //Current-situation
  getCurrentSituations(): Observable<CurrentSituation[]> {
    return this.httpClient.get<CurrentSituation[]>(`${baseUrl}/CurrentSituation`);
  }

  getCurrentSituation(id: number): Observable<CurrentSituation> {  
    return this.httpClient.get<CurrentSituation>(`${baseUrl}/CurrentSituation/${id}`);  
  }  

  createCurrentSituation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/CurrentSituation/add`, data);
  }

  updateCurrentSituation(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/CurrentSituation/edit/${id}`, data);
  }

  deleteCurrentSituation(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/CurrentSituation/${id}`, { responseType: 'text' });  
  }  
  

  //Education
  //Education
  getEducations(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(`${baseUrl}/Education`);
  }

  getEducation(id: number): Observable<Education> {  
    return this.httpClient.get<Education>(`${baseUrl}/Education/${id}`);  
  }  

  createEducation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Education/add`, data);
  }

  updateEducation(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Education/edit/${id}`, data);
  }

  deleteEducation(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Education/${id}`, { responseType: 'text' });  
  }  
  
  //Functions
  //Functions
  getFunctions(): Observable<Function[]> {
    return this.httpClient.get<Function[]>(`${baseUrl}/Function`);
  }

  getFunction(id: number): Observable<Function> {  
    return this.httpClient.get<Function>(`${baseUrl}/Function/${id}`);  
  }  

  createFunction(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Function/add`, data);
  }

  updateFunction(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Function/edit/${id}`, data);
  }

  deleteFunction(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Function/${id}`, { responseType: 'text' });  
  }  
  
  //Globale-experience
  //Globale-experience
  getGlobaleExperiences(): Observable<GlobalExperience[]> {
    return this.httpClient.get<GlobalExperience[]>(`${baseUrl}/GlobalExperience`);
  }

  getGlobaleExperience(id: number): Observable<GlobalExperience> {  
    return this.httpClient.get<GlobalExperience>(`${baseUrl}/GlobalExperience/${id}`);  
  }  

  createGlobaleExperience(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/GlobalExperience/add`, data);
  }

  updateGlobaleExperience(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/GlobalExperience/edit/${id}`, data);
  }

  deleteGlobaleExperience(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/GlobalExperience/${id}`, { responseType: 'text' });  
  }  
  
  //Profile
  //Profile
  getProfiles(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(`${baseUrl}/Profile`);
  }

  getProfile(id: number): Observable<Profile> {  
    return this.httpClient.get<Profile>(`${baseUrl}/Profile/${id}`);  
  }  

  createProfile(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Profile/add`, data);
  }

  updateProfile(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Profile/edit/${id}`, data);
  }

  deleteProfile(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Profile/${id}`, { responseType: 'text' });  
  }  
  

  //Skills
  //Skills
  getSkills(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(`${baseUrl}/Skills`);
  }

  getSkill(id: number): Observable<Skills> {  
    return this.httpClient.get<Skills>(`${baseUrl}/Skills/${id}`);  
  }  

  createSkill(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/Skills/add`, data);
  }

  updateSkill(id: number,data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/Skills/edit/${id}`, data);
  }

  deleteSkill(id: number): Observable<any> {  
    return this.httpClient.delete(`${baseUrl}/Skills/${id}`, { responseType: 'text' });  
  }  
}
