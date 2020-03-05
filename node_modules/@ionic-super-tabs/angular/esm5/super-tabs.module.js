import * as tslib_1 from "tslib";
import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, NgModule, NgZone } from '@angular/core';
import { appInit } from './app-init';
import { SuperTab, SuperTabButton, SuperTabs, SuperTabsContainer, SuperTabsToolbar } from './directives/proxies';
export var DECLARATIONS = [
    SuperTab,
    SuperTabButton,
    SuperTabs,
    SuperTabsContainer,
    SuperTabsToolbar,
];
var SuperTabsModule = /** @class */ (function () {
    function SuperTabsModule() {
    }
    SuperTabsModule_1 = SuperTabsModule;
    SuperTabsModule.forRoot = function () {
        return {
            ngModule: SuperTabsModule_1,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInit,
                    multi: true,
                    deps: [DOCUMENT, NgZone],
                },
            ],
        };
    };
    var SuperTabsModule_1;
    SuperTabsModule = SuperTabsModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: DECLARATIONS,
            exports: DECLARATIONS,
            imports: [CommonModule],
        })
    ], SuperTabsModule);
    return SuperTabsModule;
}());
export { SuperTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXItdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMtc3VwZXItdGFicy9hbmd1bGFyLyIsInNvdXJjZXMiOlsic3VwZXItdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpILE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRztJQUMxQixRQUFRO0lBQ1IsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFPRjtJQUFBO0lBY0EsQ0FBQzt3QkFkWSxlQUFlO0lBQ25CLHVCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLE9BQU87b0JBQ25CLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQ3pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFiVSxlQUFlO1FBTDNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csZUFBZSxDQWMzQjtJQUFELHNCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhcHBJbml0IH0gZnJvbSAnLi9hcHAtaW5pdCc7XG5pbXBvcnQgeyBTdXBlclRhYiwgU3VwZXJUYWJCdXR0b24sIFN1cGVyVGFicywgU3VwZXJUYWJzQ29udGFpbmVyLCBTdXBlclRhYnNUb29sYmFyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Byb3hpZXMnO1xuXG5leHBvcnQgY29uc3QgREVDTEFSQVRJT05TID0gW1xuICBTdXBlclRhYixcbiAgU3VwZXJUYWJCdXR0b24sXG4gIFN1cGVyVGFicyxcbiAgU3VwZXJUYWJzQ29udGFpbmVyLFxuICBTdXBlclRhYnNUb29sYmFyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlMsXG4gIGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN1cGVyVGFic01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3VwZXJUYWJzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogYXBwSW5pdCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICBkZXBzOiBbRE9DVU1FTlQsIE5nWm9uZV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==