"use strict";
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxzQkFBNkIsSUFBdUM7SUFDbEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLFVBQVUsR0FBRyxJQUFJLFlBQVksQ0FDL0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNoQixDQUFDLDhCQUE4QixDQUFDLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztBQUNILENBQUM7QUFaZSxvQkFBWSxlQVkzQixDQUFBIn0=