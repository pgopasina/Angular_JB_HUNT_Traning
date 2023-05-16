import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { JbhuntserviceService } from '../jbhuntservice.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { JbTask1Component } from './jb-task1.component';

describe('JbTask1Component', () => {
  let component: JbTask1Component;
  let fixture: ComponentFixture<JbTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JbTask1Component],
      providers: [JbhuntserviceService, MessageService, DomSanitizer],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JbTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call exportExcel method', () => {
    component.exportExcel()
  })

  it('should call onDownloadFile method', () => {
    component.onDownloadFile()
  })

  //  it('should call exportExcel method',()=>{
  //   spyOn(component.uploadedFiles,"push")
  //   component.onUpload('file')
  //   expect(component.uploadedFiles.push).not.toHaveBeenCalled();
  //  });

  it('should call onUpload method', () => {
    spyOn(component.uploadedFiles, "push")
    component.onUpload('file')
    expect(component.uploadedFiles.push('file')).not.toHaveBeenCalledWith();
  });

  it('should call convertFileToBase64 method', () => {
    component.convertFileToBase64()
  })

  it('should call onUploadFile method', () => {
    component.onUploadFile()
  })
});
