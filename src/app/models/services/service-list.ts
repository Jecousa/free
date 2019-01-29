import { Service } from '../services/service';

export const SERVICES: Service[] = [

    // tslint:disable-next-line:quotemark
    { id: 1, image: "../../../assets/webImg.jpg",
     // tslint:disable-next-line:max-line-length
     name: 'Mobile-Web Services', description: 'Engage customers, viewers, and clients with mobile-web applications, on any device from websites to blogs.',
      // tslint:disable-next-line:quotemark
      button:"web", buttonText:"More About Web-Mobile",
      user1: 'Small Business Owners', user2:'Artisans, Craftsmen, and Indivduals', user3:'Organizations and Events',
      detail1:'Custom-branded websites with mobile first design', detail2:'Personalized responsive websites with integrated blog', detail3:'Interactive user inteferaces with multimedia design focus',
      tech1:'Angular', tech2:'Ionic',tech3:'WordPress',
      techpic1:'fab fa-angular', techpic2:'fas fa-atom-alt', techpic3:'fab fa-wordpress'},
    
      // tslint:disable-next-line:quotemark
      { id: 2, image: "../../../assets/swImg.jpeg", 
    name: 'Enterprise Applications', description: 'Full-stack applications, we specialize in creating adaptable productivity tools and automation scripts. ', 
    button:"apps", 
    // tslint:disable-next-line:quotemark
    buttonText:"More About Apps",
    user1: 'Full-Stack Applications', user2:'Custom Tools', user3:'Android Native Applications',
    detail1:'Powerful applications at all levels of the tech stack', detail2:'Increase productivity with customized tools', detail3:'Dedicated Android applications',
    tech1:'Python', tech2:'Java',tech3:'Android',
    techpic1:'fab fa-python', techpic2:'fab fa-java', techpic3:'fab fa-android'},
    
    { id: 3, image:"../../../assets/devopsImg.jpg", 
    name: 'DevOps Automation',
     // tslint:disable-next-line:max-line-length
     description: 'Automate your software production process with cutting edge, cloud-based technologies.  Do more faster, smarter, and better.', 
    // tslint:disable-next-line:quotemark
    button:"auto", buttonText:'More About Automation',
    user1: 'Software Engineering Firms', user2:'Web Developers', user3:'Technology Specialists',
    detail1:'Firms that develop applications, needing a platform', detail2:'Devlopers needing to quickly scale network capabilities', detail3:'Specialists needing a wide-range of cloud-based computing services',
    tech1:'AWS', tech2:'Jenkins', tech3:'Git',
    techpic1:'fab fa-aws', techpic2:'fab fa-jenkins', techpic3:'fab fa-git'}

];
