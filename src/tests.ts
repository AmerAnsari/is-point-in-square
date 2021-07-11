import { ok } from 'assert';
import { single } from './index';

ok(single({
  minX: 0,
  maxX: 10,
  minY: 0,
  maxY: 10,
}, {
  x: 5,
  y: 5,
}));

ok(!single({
  minX: 0,
  maxX: 10,
  minY: 0,
  maxY: 10,
}, {
  x: 15,
  y: 5,
}));


ok(single({
  minX: 0,
  maxX: 10,
  minY: 0,
  maxY: 10,
  minZ: -10,
  maxZ: 10,
}, {
  x: 5,
  y: 5,
  z: -5,
}));

ok(!single({
  minX: 0,
  maxX: 10,
  minY: 0,
  maxY: 10,
  minZ: 0,
  maxZ: 10,
}, {
  x: 5,
  y: 5,
  z: -5,
}));

console.log('All tests have passed ✅');
