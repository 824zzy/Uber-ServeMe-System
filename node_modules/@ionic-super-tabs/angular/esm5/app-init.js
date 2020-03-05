import * as tslib_1 from "tslib";
import { applyPolyfills, defineCustomElements } from '@ionic-super-tabs/core/loader';
var didInitialize = false;
export function appInit(doc, zone) {
    return function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var win, aelFn;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        win = doc.defaultView;
                        if (!win || didInitialize) {
                            return [2 /*return*/];
                        }
                        didInitialize = true;
                        aelFn = '__zone_symbol__addEventListener' in doc.body
                            ? '__zone_symbol__addEventListener'
                            : 'addEventListener';
                        return [4 /*yield*/, applyPolyfills()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, defineCustomElements(win, {
                                syncQueue: true,
                                raf: raf,
                                jmp: function (h) { return zone.runOutsideAngular(h); },
                                ael: function (elm, eventName, cb, opts) {
                                    elm[aelFn](eventName, cb, opts);
                                },
                                rel: function (elm, eventName, cb, opts) {
                                    elm.removeEventListener(eventName, cb, opts);
                                },
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
}
;
export var raf = function (h) {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluaXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMtc3VwZXItdGFicy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYXBwLWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFFMUIsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFhLEVBQUUsSUFBWTtJQUNqRCxPQUFPOzs7Ozs7d0JBRUMsR0FBRyxHQUFRLEdBQUcsQ0FBQyxXQUFrQixDQUFDO3dCQUd4QyxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQWEsRUFBRTs0QkFDekIsc0JBQU87eUJBQ1I7d0JBRUQsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFFZixLQUFLLEdBQUcsaUNBQWlDLElBQUssR0FBRyxDQUFDLElBQVk7NEJBQ2xFLENBQUMsQ0FBQyxpQ0FBaUM7NEJBQ25DLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFHdkIscUJBQU0sY0FBYyxFQUFFLEVBQUE7O3dCQUF0QixTQUFzQixDQUFDO3dCQUV2QixxQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUU7Z0NBQzlCLFNBQVMsRUFBRSxJQUFJO2dDQUNmLEdBQUcsS0FBQTtnQ0FDSCxHQUFHLEVBQUUsVUFBQyxDQUFNLElBQUssT0FBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCO2dDQUMxQyxHQUFHLEVBQUgsVUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJO29DQUN6QixHQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQ0FDM0MsQ0FBQztnQ0FDRCxHQUFHLFlBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSTtvQ0FDMUIsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0NBQy9DLENBQUM7NkJBQ0YsQ0FBQyxFQUFBOzt3QkFWRixTQVVFLENBQUM7Ozs7O0tBQ0osQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDO0FBS0YsTUFBTSxDQUFDLElBQU0sR0FBRyxHQUFHLFVBQUMsQ0FBTTtJQUN4QixJQUFJLE9BQU8sb0NBQW9DLEtBQUssVUFBVSxFQUFFO1FBQzlELE9BQU8sb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFDRCxJQUFJLE9BQU8scUJBQXFCLEtBQUssVUFBVSxFQUFFO1FBQy9DLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakM7SUFDRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFwcGx5UG9seWZpbGxzLCBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ0Bpb25pYy1zdXBlci10YWJzL2NvcmUvbG9hZGVyJztcblxuXG5sZXQgZGlkSW5pdGlhbGl6ZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwSW5pdChkb2M6IERvY3VtZW50LCB6b25lOiBOZ1pvbmUpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHdpbjogYW55ID0gZG9jLmRlZmF1bHRWaWV3IGFzIGFueTtcblxuXG4gICAgaWYgKCF3aW4gfHwgZGlkSW5pdGlhbGl6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpZEluaXRpYWxpemUgPSB0cnVlO1xuXG4gICAgY29uc3QgYWVsRm4gPSAnX196b25lX3N5bWJvbF9fYWRkRXZlbnRMaXN0ZW5lcicgaW4gKGRvYy5ib2R5IGFzIGFueSlcbiAgICAgID8gJ19fem9uZV9zeW1ib2xfX2FkZEV2ZW50TGlzdGVuZXInXG4gICAgICA6ICdhZGRFdmVudExpc3RlbmVyJztcblxuXG4gICAgYXdhaXQgYXBwbHlQb2x5ZmlsbHMoKTtcblxuICAgIGF3YWl0IGRlZmluZUN1c3RvbUVsZW1lbnRzKHdpbiwge1xuICAgICAgc3luY1F1ZXVlOiB0cnVlLFxuICAgICAgcmFmLFxuICAgICAgam1wOiAoaDogYW55KSA9PiB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKGgpLFxuICAgICAgYWVsKGVsbSwgZXZlbnROYW1lLCBjYiwgb3B0cykge1xuICAgICAgICAoZWxtIGFzIGFueSlbYWVsRm5dKGV2ZW50TmFtZSwgY2IsIG9wdHMpO1xuICAgICAgfSxcbiAgICAgIHJlbChlbG0sIGV2ZW50TmFtZSwgY2IsIG9wdHMpIHtcbiAgICAgICAgZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYiwgb3B0cyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufTtcblxuZGVjbGFyZSBjb25zdCBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGFueTtcbmRlY2xhcmUgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBhbnk7XG5cbmV4cG9ydCBjb25zdCByYWYgPSAoaDogYW55KSA9PiB7XG4gIGlmICh0eXBlb2YgX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgfVxuICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCk7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoaCk7XG59O1xuIl19