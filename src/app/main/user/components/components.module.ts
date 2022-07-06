import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserDetailsModule } from './allusers/user-details/user-details.module';
import { AllusersModule } from './allusers/allusers.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
        FormsModule,
    ],

    providers: []
})
export class ComponentsModule { }
