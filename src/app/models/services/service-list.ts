import { Service } from '../services/service';

export const SERVICES: Service[] = [

    // tslint:disable-next-line:quotemark
    { id: 1, image: "https://cdn.dribbble.com/users/772985/screenshots/4416950/1_d.jpg",
     // tslint:disable-next-line:max-line-length
     name: 'Mobile-Web Services', description: 'Engage customers, viewers, and clients with mobile-web applications, on any device from websites to blogs.',
      // tslint:disable-next-line:quotemark
      button:"web", buttonText:"More About Web-Mobile"},
    
      // tslint:disable-next-line:quotemark
      { id: 2, image: "https://cdn.ritely.com/wp-content/uploads/2018/05/br1.jpg", 
    name: 'Enterprise Applications', description: 'Full-stack applications, we specialize in creating adaptable productivity tools and automation scripts. ', 
    button:"apps", 
    // tslint:disable-next-line:quotemark
    buttonText:"More About Apps"},
    
    { id: 3, image:"https://cdn.ritely.com/wp-content/uploads/2018/05/br3.jpg", 
    name: 'DevOps Automation',
     // tslint:disable-next-line:max-line-length
     description: 'Automate your software production process with cutting edge, cloud-based technologies.  Do more faster, smarter, and better.', 
    // tslint:disable-next-line:quotemark
    button:"auto", buttonText:'More About Automation',
    user1: 'Software Engineering Firms', user2:'Web Developers', user3:'Technology Specialists',
    detail1:'Firms that develop applications, needing a platform', detail2:'Devlopers needing to quickly scale network capabilities', detail3:'Specialists needing a wide-range of cloud-based computing services'
    tech1:'AWS', tech2:'Jenkins'tech3:'Git'
    techpic1:'test', techpic2:'test', techpic3:'test'}

];
