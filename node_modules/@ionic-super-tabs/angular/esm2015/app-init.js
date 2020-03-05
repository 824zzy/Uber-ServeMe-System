import * as tslib_1 from "tslib";
import { applyPolyfills, defineCustomElements } from '@ionic-super-tabs/core/loader';
let didInitialize = false;
export function appInit(doc, zone) {
    return function () {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const win = doc.defaultView;
            if (!win || didInitialize) {
                return;
            }
            didInitialize = true;
            const aelFn = '__zone_symbol__addEventListener' in doc.body
                ? '__zone_symbol__addEventListener'
                : 'addEventListener';
            yield applyPolyfills();
            yield defineCustomElements(win, {
                syncQueue: true,
                raf,
                jmp: (h) => zone.runOutsideAngular(h),
                ael(elm, eventName, cb, opts) {
                    elm[aelFn](eventName, cb, opts);
                },
                rel(elm, eventName, cb, opts) {
                    elm.removeEventListener(eventName, cb, opts);
                },
            });
        });
    };
}
;
export const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluaXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMtc3VwZXItdGFicy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYXBwLWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFFMUIsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFhLEVBQUUsSUFBWTtJQUNqRCxPQUFPOztZQUVMLE1BQU0sR0FBRyxHQUFRLEdBQUcsQ0FBQyxXQUFrQixDQUFDO1lBR3hDLElBQUksQ0FBQyxHQUFHLElBQUksYUFBYSxFQUFFO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJCLE1BQU0sS0FBSyxHQUFHLGlDQUFpQyxJQUFLLEdBQUcsQ0FBQyxJQUFZO2dCQUNsRSxDQUFDLENBQUMsaUNBQWlDO2dCQUNuQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFHdkIsTUFBTSxjQUFjLEVBQUUsQ0FBQztZQUV2QixNQUFNLG9CQUFvQixDQUFDLEdBQUcsRUFBRTtnQkFDOUIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsR0FBRztnQkFDSCxHQUFHLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJO29CQUN6QixHQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSTtvQkFDMUIsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUEsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDO0FBS0YsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDNUIsSUFBSSxPQUFPLG9DQUFvQyxLQUFLLFVBQVUsRUFBRTtRQUM5RCxPQUFPLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFVBQVUsRUFBRTtRQUMvQyxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhcHBseVBvbHlmaWxscywgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICdAaW9uaWMtc3VwZXItdGFicy9jb3JlL2xvYWRlcic7XG5cblxubGV0IGRpZEluaXRpYWxpemUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcEluaXQoZG9jOiBEb2N1bWVudCwgem9uZTogTmdab25lKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB3aW46IGFueSA9IGRvYy5kZWZhdWx0VmlldyBhcyBhbnk7XG5cblxuICAgIGlmICghd2luIHx8IGRpZEluaXRpYWxpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWRJbml0aWFsaXplID0gdHJ1ZTtcblxuICAgIGNvbnN0IGFlbEZuID0gJ19fem9uZV9zeW1ib2xfX2FkZEV2ZW50TGlzdGVuZXInIGluIChkb2MuYm9keSBhcyBhbnkpXG4gICAgICA/ICdfX3pvbmVfc3ltYm9sX19hZGRFdmVudExpc3RlbmVyJ1xuICAgICAgOiAnYWRkRXZlbnRMaXN0ZW5lcic7XG5cblxuICAgIGF3YWl0IGFwcGx5UG9seWZpbGxzKCk7XG5cbiAgICBhd2FpdCBkZWZpbmVDdXN0b21FbGVtZW50cyh3aW4sIHtcbiAgICAgIHN5bmNRdWV1ZTogdHJ1ZSxcbiAgICAgIHJhZixcbiAgICAgIGptcDogKGg6IGFueSkgPT4gem9uZS5ydW5PdXRzaWRlQW5ndWxhcihoKSxcbiAgICAgIGFlbChlbG0sIGV2ZW50TmFtZSwgY2IsIG9wdHMpIHtcbiAgICAgICAgKGVsbSBhcyBhbnkpW2FlbEZuXShldmVudE5hbWUsIGNiLCBvcHRzKTtcbiAgICAgIH0sXG4gICAgICByZWwoZWxtLCBldmVudE5hbWUsIGNiLCBvcHRzKSB7XG4gICAgICAgIGVsbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IsIG9wdHMpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn07XG5cbmRlY2xhcmUgY29uc3QgX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBhbnk7XG5kZWNsYXJlIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZTogYW55O1xuXG5leHBvcnQgY29uc3QgcmFmID0gKGg6IGFueSkgPT4ge1xuICBpZiAodHlwZW9mIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCk7XG4gIH1cbiAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpO1xuICB9XG4gIHJldHVybiBzZXRUaW1lb3V0KGgpO1xufTtcbiJdfQ==