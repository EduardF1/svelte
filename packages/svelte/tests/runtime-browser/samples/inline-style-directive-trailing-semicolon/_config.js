import { test, assert_ok } from '../../assert.js';

export default test({
    get props() {
        return { angle: 250 };
    },
    test({ assert, target, component, window }) {
        const div = target.querySelector('div');
        assert_ok(div);
        assert.ok(div.style.background.includes('conic-gradient'));

        component.angle = 50;
        
        assert_ok(div);
        assert.ok(div.style.background.includes('50deg'));
    }
});