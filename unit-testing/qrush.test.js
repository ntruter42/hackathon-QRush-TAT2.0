describe('The QRush App factory function', function() {
    let qRush;

    describe('set and get functionality', function() {
        beforeEach(function(){
            qRush = QRushFactory();
        });

        it('should be able to set and get the treasure prize', function() {
            qRush.setKnownChests([{}, {}]);
            assert.deepEqual([{}, {}], qRush.getKnownChests());
        });
    
        it('should be able to set and get the treasure prize', function() {
            qRush.setKnownChests([{ gshvfjsf : 214251, ugfjnsmf : '34634huvbjkds' }, { hjmdnbfs : 3275312 }]);
            assert.deepEqual([{ gshvfjsf : 214251, ugfjnsmf : '34634huvbjkds' }, { hjmdnbfs : 3275312 }], qRush.getKnownChests());
        });

        it('should be able to initialise the known chest in the factory function', function() {
            qRush = QRushFactory([ { kydvhf : 12431521, bvnfjffg : 'kjbrgrgr' } ]);
            assert.deepEqual([ { kydvhf : 12431521, bvnfjffg : 'kjbrgrgr' } ], qRush.getKnownChests());
        });

    });
    
});