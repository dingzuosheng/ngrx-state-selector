import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { getChannelname } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  
  value:number = 0;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    // this.store.select(getChannelname).subscribe(channelName =>{
    //   console.log('Channel Name Observable called');
    //   this.channelName = channelName
    // })
    this.channelName$ = this.store.select(getChannelname);
  }

  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName())
  }
}
