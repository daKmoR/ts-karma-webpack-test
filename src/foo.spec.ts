import { sayFoo } from "./foo";

describe('foo', function() {
	it('says foo', function(done) {
		if (sayFoo() === 'Foo!') {
			done()
		} else {
			done("Didn't say 'Foo!'")
		}
	})
})