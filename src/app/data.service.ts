import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(){}
  jsonData:any
  
  getData(): Array<number> {
    this.jsonData=[
        ["Filter", 70],
        ["Waste Handling", 0],
        ["Equipment", 0],
        ["Labour", 10],
        ["Others", 10],
        {
            "name": "Other",
            "y": 10,
            "dataLabels": {
                "enabled": false
            }
        }
    ]
    return this.jsonData
  }

}