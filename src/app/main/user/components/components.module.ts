import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
    {
        path: 'Allusers',
        loadChildren: () => import('./allusers/allusers.module').then(m => m.AllusersModule)
    },
    {
        path: 'Adduser',
        loadChildren: () => import('./adduser/adduser.module').then(m => m.AdduserModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CoreCommonModule,
        ContentHeaderModule,
        NgbModule,
        NgSelectModule,
        FormsModule,
        NgxDatatableModule,
        NgbModule
    ],

    providers: []
})
export class ComponentsModule { }
