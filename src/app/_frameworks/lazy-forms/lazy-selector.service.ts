import {Subject} from 'rxjs/Subject';

export abstract class LazySelectorService {
  onReset: Subject<any>;
}
