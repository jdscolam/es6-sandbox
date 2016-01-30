/**
 * Created by jdsco on 1/30/2016.
 */
'use strict';

import {expect} from 'chai';
import {container} from 'needlepoint'
import {Bar} from './bar';

describe('Bar', function(){
    it('should have a foo property', function(){
        var bar = container.resolve(Bar);
        expect(bar.foo).to.exist;
    })
});