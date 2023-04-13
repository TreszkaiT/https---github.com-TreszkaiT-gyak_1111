import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CONFIG_FEATURE_KEY, ConfigStoreService } from 'src/app/api/config';

import { ConfigStoreServiceImpl } from './service';
import { ConfigEffects } from './state/config.effects';
import { configReducer } from './state/config.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CONFIG_FEATURE_KEY, configReducer),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  providers: [
    {
      provide: ConfigStoreService,
      useClass: ConfigStoreServiceImpl,
    }
  ]
})
export class ConfigStoreModule { }
