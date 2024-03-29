type alignType = "left" | "center" | "right";
export class TextData {
    content: string = '';
    aligin: string = 'left';
    fontSize: number = 1;
    fontBlod: boolean = false;

    constructor(content: string, aligin: string, fontSize: number, fontBlod: boolean) {
        this.content = content;
        this.aligin = aligin;
        this.fontSize = fontSize;
        this.fontBlod = fontBlod;
    }

}

export class PrintData {
    showText: string = ''

    constructor(text: string) {
        this.showText = text;
    };
}

export class TextPrinteData extends PrintData {
    data: TextData[] = [];
    constructor(text:string,d: TextData[]) {
        super(text);
        this.data = d;
    }
}

export class EmptyPrintData extends PrintData{
   num:number=0;
   constructor(num:number){
    super("空行数量："+ num)
    this.num = num;
   }

}

export class DividPrintData  extends PrintData{
}


export class TabBean{
    content:string=''
    constructor(data:string){
        this.content =data
    }
}
export  class TabConfig{
    width:number=1;
    align:alignType='left';
    verticalAlign:string='top';
    marginLeft:number=0;
    marginRight:number=0;
    allWidth:number = 3;
}


export class TabData {
      tabConfigs:TabConfig[];
      tabData:TabBean[];
      constructor(tabData:TabBean[],tabConfigs:TabConfig[]){
        this.tabConfigs = tabConfigs;
        this.tabData =tabData;
      }

}

export class TabPrintData extends PrintData{
    tabData:TabData[];

    constructor(tabData:TabData[]){
        super('tab类型数据')
        this.tabData =tabData;
      }
}


export class StyleOneMenu{
    price:string;
    count:string;
    name:string;
    constructor(name:string,price:string,count:string){
        this.name = name;
        this.price = price;
        this.count = count;
    }
}

export enum PrintStyle{
    StyleOne
}