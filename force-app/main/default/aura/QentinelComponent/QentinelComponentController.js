({
    myAction : function(cmp, event, helper) {
        //Set action to call the callQentinel method in the QentinelRun class
        //Pass the User Story Record Id to the method
        var action = cmp.get("c.callQentinel");
        action.setParams({
            recordId: cmp.get("v.recordId")
        });
        //Set callback function to refresh the User Story record to display Qentinel values
        action.setCallback(cmp,
        	function(response) {
				var urlEvent = $A.get("e.force:navigateToURL");
                //TODO: Set URL dynamically. Take out hardcode. 
    			urlEvent.setParams({
      				"url": "https://mjpersonaltrial.lightning.force.com/lightning/r/copado__User_Story__c/" + cmp.get("v.recordId") + "/view"
    			});
    			urlEvent.fire();
                var close = $A.get('e.force:closeQuickAction').fire(); 
        	}
    	);
        $A.enqueueAction(action);
    }  
})