import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToastrComponent } from './custom-toastr/custom-toastr.component';
import { CardSnippetModule } from './../../../@core/components/card-snippet/card-snippet.module';



@NgModule({
    declarations: [
        CustomToastrComponent
    ],
    imports: [
        CommonModule,
        ToastrModule,
        CardSnippetModule,
        CoreCommonModule,
        NgbModule,
        ContentHeaderModule,
    ]
})
export class ExtensionsModule { }