import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Cla, Log } from '../classes/cla';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api="https://wtsacademy.dedicateddevelopers.us/api/user/signup"
  loginapi="https://wtsacademy.dedicateddevelopers.us/api/user/signin"
  profile_api="https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"
  pobj:any=[{
    id:1,
    name:'Ladies Garments',
    product:[
      {
        pid:10,
        pname:'Indian wear',
        productAll:[{
          name1:'Dhakai',
          price:2500,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/dha1.jpg'
        },
        {
          name1:'Benarashi',
          price:4000,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/bena.jpg'
        },
        {
          name1:'Silk',
          price:3500,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/silk.jpg'
        },
        {
          name1:'Lahenga',
          price:2900,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/lahenga.jpg'
        },
        {
          name1:'Salwar',
          price:1800,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/salwar.jpg'
        },
        {
          name1:'Palazzo salwar',
          price:1700,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/palazzo.jpg'
        }
        ]
      },
      {
        pid:11,
        pname:'Western wear',
        productAll:[{
          name1:"Jeans",
          price:3500,
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
          image:'../../assets/jeans.jpg'
        },
        {
          name1:'Tops',
          price:1000,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/tops.jpg'  
        },
        {
          name1:'Sleeveless tops',
          price:1200,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/stops.jpg'
        },
        {
          name1:"Gowns",
          price:3900,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:"../../assets/gown.jpg"
        },
        {
          name1:"Short Dresses",
          price:2100,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/dress.jpg'
        },
        {
          name1:"Trouser",
          price:2300,
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          image:'../../assets/trouser.jpg'
        }
        ]
      }
    ]
  },
  {
    id:3,
    name:'Gents Wear',
    product:[{
      pid:30,
      pname:"Indian Wear",
      productAll:[{
        name1:'Kurta Churider',
        price:2200,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:"../../assets/kchuridar.jpg"
      },
    {
      name1:'Sherwani',
      price:3700,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      image: "../../assets/sherwani.jpg"
    },
  {
    name1:"Kurta Salwar",
    price:3500,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
    image:"../../assets/ksalwar.jpg"
  },
{
  name1:"Pathani suit",
  price:2400,
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  image:"../../assets/pathan.jpg"

},
{
  name1:"Neheru Jacket",
  price:1700,
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  image:"../../assets/neheru.jpg"
},
{
  name1:"Jothpuri suit",
  price:1900,
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  image:"../../assets/jodhpuri.jpg"
}]
},
  {
    pid:31,
    pname:"Western Wear",
    productAll:[{
      name1:"Tshirt",
      price:1500,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      image:"../../assets/mTshirt.jpg"
    },
    {
     name1:" Casual shirt",
      price:1900,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      image:"../../assets/casualshirt.jpg"
    },
    {
    name1:"Formal Shirt",
      price:2200,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      image:"../../assets/formalshirt.jpg"
    },
    {
      name1:"Jeans",
        price:3700,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:"../../assets/menjeans.jpg"
      },
    {
    name1:"Formal Trouser",
    price:3900,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
    image:"../../assets/formaltrou.jpg"
  },
    {
      name1:"Jacket",
      price:2900,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      image:"../../assets/jacket.jpg"
    }
  ]
  }]
  },
  {
    id:2,
    name:'Cosmetics and Jwelleries',
    product:[{
      pid:20,
      pname:'Cosmetics',
      productAll:[{
        name1:'Liquid lipstick',
        price:1300,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/liquid.jpg'
      },
      {
        name1:'Matt Lipstick',
        price:1100,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/lips.jpg'
      },
      {
        name1:'Foundation',
        price:2200,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/found.jpg'
      },
      {
        name1:'Nail polish',
        price:2100,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/nail.jpg'
      },
      {
        name1:"Face Powder",
        price:3100,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/face.jpg'
      },
      {
        name1:'Eyeliner',
        price:3250,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:"../../assets/eye.jpg"
      }
    ]
    },
    {
      pid:21,
      pname:'Jwelleries',
      productAll:[{
        name1:'earrings',
        price:3700,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/ear.jpg'
      },
      {
        name1:'nose pin',
        price:1200,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:"../../assets/nose.jpg"
      },
      {
        name1:'Bangals',
        price:3600,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:"../../assets/bangals.jpg"
      },
      {
        name1:"Neckless",
        price:2800,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/neck.jpg'
      },
      {
        name1:'Bracelets',
        price:2900,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/brace.jpg'
      },
      {
        name1:'Rings',
        price:900,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
        image:'../../assets/ring.jpg'
      }
    ]
    }]
  }]


  constructor(private http:HttpClient) { }
  uSignup(formdata:any):Observable<Cla[]>{
    return this.http.post<Cla[]>(this.api,formdata)
  }
  usignin(formdata:any):Observable<Log[]>{
    return this.http.post<Log[]>(this.loginapi,formdata)
  }
  userDe():Observable<Cla[]>{
    return this.http.get<Cla[]>(this.profile_api)
  }
}
