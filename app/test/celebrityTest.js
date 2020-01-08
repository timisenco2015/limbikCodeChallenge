const assert = require('chai').assert;
let celebrity = require('../../app/entity/celebrity');
describe('test celebrity entity', function()
{
    it('test all entity method',function()
    {
        celebrity.setFirstName("Usain");
        celebrity.setLastName("Bolt");
        celebrity.setProfession("Field Athlete");
        celebrity.setId(1)
        celebrity.setProfile("435345ergt45");


        assert.equal("Usain",celebrity.getFirstName());
        assert.equal("Bolt",celebrity.getLastName());
        assert.equal("Field Athlete",celebrity.getProfession());
        assert.equal(1,celebrity.getId())
        assert.equal("435345ergt45",celebrity.getProfile())
    });
});


