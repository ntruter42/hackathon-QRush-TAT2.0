describe('The QRush App factory function', function() {
    let qRush;
    beforeEach(function(){
        qRush = QRushFactory();
    });

    describe('set and get functionality', function() {
     

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
    



    describe('Creating a sponsor Form.' , function(){
   

        it('It should return a registered company named Shoprite.' , function(){
             
            let CompanyName = {"companyName":'Shoprite', "branchAddress":'Ottery', "Date":'2023/06/6', "Email":'shoprite@gmail.com', "extrasDetails" : "0"};
            
            qRush.addSponsor(CompanyName)
            assert.deepEqual([CompanyName], qRush.getSponsors());
        })
    
        
        it('It should return a registered company named Woolworths.' , function(){
             
            let CompanyName = {"companyName":'Woolworths', "branchAddress":'Claremont', "Date":'2023/05/6', "Email":'woolies@gmail.com', "extrasDetails" : "0"};
           
            qRush.addSponsor(CompanyName)
            assert.deepEqual([CompanyName], qRush.getSponsors());
        })
    
        it('It should return an error message, 1 or more sections have not been been filled in.' , function(){
             
            let CompanyName = {"companyName":'', "branchAddress":'Claremont', "Date":'2023/05/6', "Email":'', "extrasDetails" : "0"};
            qRush.addSponsor(CompanyName)
            assert.deepEqual([], qRush.getSponsors());


        })
    
       
    })


});
