package com.example.application.views.helloworld3;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

/**
 * A Designer generated component for the stub-tag template.
 *
 * Designer will add and remove fields with @Id mappings but does not overwrite
 * or otherwise change this file.
 */
@PageTitle("Hello World3")
@Route(value = "hello-world2")
@Tag("hello-world3-view")
@JsModule("./views/helloworld3/hello-world3-view.ts")
public class HelloWorld3View extends LitTemplate {

    @Id
    private TextField name;

    @Id
    private Button sayHello;

    public HelloWorld3View() {
        addClassName("block");
        sayHello.addClickListener(e -> {
            Notification.show("Hello " + name.getValue());
        });
    }
}
