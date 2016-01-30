'use strict';

import {container} from 'needlepoint'
import {Bar} from './app/model/bar'

var bar = container.resolve(Bar);

console.log(bar.foo.data);