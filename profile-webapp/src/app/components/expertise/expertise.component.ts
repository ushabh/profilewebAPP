import { Component } from '@angular/core';
import { ExpertiseserviceService } from '../../services/expertiseservice.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expertise',
  imports: [NgFor],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  _expertiseSer: ExpertiseserviceService;
  constructor(private route: ActivatedRoute,expertiseSerREF:ExpertiseserviceService) {
    this._expertiseSer = expertiseSerREF;
    this._expertiseSer.getExpertiseList();
  }
}
