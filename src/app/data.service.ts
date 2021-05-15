import { Injectable } from '@angular/core'
import {Products1} from './models/user.models'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getMobilesData1():Observable<Products1[]>
  {
    return this.hc.get<Products1[]>('assets/mobiles.json')
  }
  
  bikes:Products1[]=[{Model:"Royal Enfiled",Brand:" Classic 350 ",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjBy9peZKM3jwkQ5cuOamdvVNfYgnWveH9w&usqp=CAU"},
    {Model:"Yamaha",Brand:"R15",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QSYp-zg5PIiw1LzxSKvteRKf-0Aq8m2Jjw&usqp=CAU"},
    {Model:"Honda",Brand:"CBR",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk7mmxJruHXGH99Z300VKDwjGzN2gQ4T2dA&usqp=CAU"},
    {Model:"Yamaha",Brand:"MT15",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQX-UZ1WSw4g5FKuncVUH6JjBuPU1e7FWEw&usqp=CAU"},
    {Model:"KTM",Brand:"KTM 390",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QJHGRx26G3P3dVatVXpzdxwfnZNbPVTXPQ&usqp=CAU"},
    {Model:"KTM",Brand:"Duke 250",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5B-4Ka62XV7VVbn-_udR-nltUo40PS8cgA&usqp=CAU"},
    {Model:"Suziki",Brand:"Gixer 250",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFJU8tJNgJyauKlluB-R7p9D3hMX7Xkmg1A&usqp=CAU"},
    {Model:"Royal Enfield",Brand:"Interstellar",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoCz3NzA7umCr2b-01P5ZauiRTVLvBUSJWg&usqp=CAU"}
  ]
  private Laptops:Products1[]=[{Model:"HP",Brand:" Inspire ",Image:"data:image/jpeg;base64,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"},
    {Model:"Acer",Brand:"Neon",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYDrOouluHikCcNaWHaEI9jeiyTaLtoa00A&usqp=CAU"},
    {Model:"Lenovo",Brand:"Idea Pad",Image:"https://s1.poorvikamobile.com/image/data/AAAAA/LENOVO/Lenovo%20IdeaPad%20L340%20Gaming%20Intel%20Core%20i5%209th%20Gen%20Windows%2010%20Laptop/Lenovo-IdeaPad-L340-Gaming-Intel-Core-i5-9th-Gen-Windows-10-Laptop-1.jpg"},
    {Model:"Mi",Brand:"Notebook",Image:"data:image/jpeg;base64,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"},
    {Model:"Apple",Brand:"Mac Book Pro",Image:"https://sm.mashable.com/mashable_in/review/m/macbook-pr/macbook-pro-m1-review-babys-first-content-creation-machine_3e58.jpg"},
    {Model:"Acer",Brand:"Predator",Image:"https://i0.wp.com/laptopmedia.com/wp-content/uploads/2019/11/acerpredatortriton300pt315-51featured.jpg?fit=1200%2C675&ssl=1&w=640"},
    {Model:"Asus",Brand:"ROG",Image:"https://rog.asus.com/media/1546852826561.jpg"},
    {Model:"Dell",Brand:"Inspiron Plus",Image:"http://i.dell.com/sites/csimages/Videos_Images/en/3e4554b9-3080-4a01-bbe7-556b79678c6e.jpg"}
    ]

    getbikesdata()
    {
      return this.bikes
    }

    getLaptopData()
    {
      return this.Laptops
    }
}
