"use strict";
var application = require("application");
var platform = require("platform");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                UIApplication.sharedApplication().statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            }
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate]
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.onActivityStarted = function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window = application.android.startActivity.getWindow();
                window.setStatusBarColor(0x000000);
                var decorView = window.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        };
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMzQyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQVFyQztJQUNFLHVEQUF1RDtJQUN2RCxzRUFBc0U7SUFDdEUscUNBQXFDO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbkMsd0NBQXdDLEVBQUU7Z0JBQ3hDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7Z0JBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1NBQ0YsRUFBRTtZQUNDLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUMsQ0FBQztRQUNMLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLDBHQUEwRztJQUMxRyxxQ0FBcUM7SUFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRztZQUN0QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDN0IsSUFBSSxDQUFDLDRCQUE0QjtzQkFDL0IsSUFBSSxDQUFDLHFDQUFxQztzQkFDMUMsSUFBSSxDQUFDLGdDQUFnQztzQkFDckMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUMsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBcENlLDBCQUFrQixxQkFvQ2pDLENBQUEifQ==