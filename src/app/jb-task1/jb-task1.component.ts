import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { JbhuntserviceService } from '../jbhuntservice.service';
import { Product } from '../product';
@Component({
  selector: 'app-jb-task1',
  templateUrl: './jb-task1.component.html',
  styleUrls: ['./jb-task1.component.css'],
  providers:[MessageService]
})
export class JbTask1Component implements OnInit {

  title = 'jbhunt';
  products: Product[] = [];
  selectedProducts: Product[] = [];
  fileData: any
  name: any;
  cols: any[] = [];
  exportColumns: any[] = [];
  searchValue: any;
  uploadedFiles: any[] = [];
  multiple: boolean = true;
  base64: string = "Base64...";
  fileSelected?: Blob;
  imageUrl?: string;
  btntoggle = false
  
  constructor(private jbHuntService: JbhuntserviceService, private messageService: MessageService, private sant: DomSanitizer) { }

  ngOnInit() {
    this.jbHuntService.getProductsSmall().then((data: Product[]) => (this.products = data));

    this.cols = [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" }
    ];

    // this.exportColumns = this.cols.map(col => ({
    //   title: col.header,
    //   dataKey: col.field
    // }));
  }

  //   exportPdf() {
  //     import("jspdf").then(jsPDF => {
  //         import("jspdf-autotable").then(x => {
  //             const doc = new jsPDF.default(0,0);
  //             // doc.autoTable(this.exportColumns, this.products);
  //             doc.save('products.pdf');
  //         })
  //     })
  // }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
      //console.log(x);

    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }


  onSelectNewFile(files: FileList): void {
    console.log(files);
    this.fileSelected = files[0];
    this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string
    this.base64 = "Base64...";
  }

  convertFileToBase64(): void {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }
  }

  onUploadFile(item: any = []) {
    this.btntoggle = true
    var file = item.target.files[0];
    console.log("first output", file);
    this.name = file.name
    var reader = new FileReader();
    // console.log("second output",reader);
    console.log("third output",reader.readAsDataURL(file));
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.fileData = reader.result;
      // var inputData=reader.result;
      // console.log("fourth output",inputData)
      // this.fileData=inputData;
    }
    // console.log("sixth output",reader.onload)
  }

  onDownloadFile() {
    const downloadLink = document.createElement('a');
    const fileName = this.name;
    // const fileName="image"+".jpg";
    downloadLink.href = this.fileData;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  // onDownload(){
    
  // }
}
