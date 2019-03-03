import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  public value:any;
 @Output() childApToParent=new EventEmitter<any>();
  constructor() {}

  public newsListAray:any=[{
    Summary:"Article About newspapar Templete",
  date:'2-1-2019', 
  Editor:'Shiv Kumar Btalvi',
  Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
   Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
   NewsPic:'assets/news1.jpg'
  },
  {
    Summary:"Article About newspapar Templete",
    date:'2-1-2019', 
    Editor:'Shiv Kumar Btalvi',
    Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
     Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
     NewsPic:'assets/news1.jpg'
    },
    {
      Summary:"Article About newspapar Templete",
      date:'2-1-2019', 
      Editor:'Shiv Kumar Btalvi',
      Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
       Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
       NewsPic:'assets/news2.jpg'
      },
      {
        Summary:"Article About newspapar Templete",
        date:'2-1-2019', 
        Editor:'Shiv Kumar Btalvi',
        Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
         Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
         NewsPic:'assets/news1.jpg'
        },
        {
          Summary:"Article About newspapar Templete",
          date:'2-1-2019', 
          Editor:'Shiv Kumar Btalvi',
          Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
           Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
           NewsPic:'assets/news2.jpg'
          }

];
  
getDataNewsItem(event){
 this.value=event;
 this.childApToParent.emit(this.value);
console.log(event,"newsList");
console.log(this.value);
}

}
