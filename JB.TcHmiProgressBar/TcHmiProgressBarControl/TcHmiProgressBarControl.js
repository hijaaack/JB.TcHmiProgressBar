/*
 * Generated 1/18/2022 3:31:19 PM
 * Copyright (C) 2022
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcHmiProgressBar;
        (function (TcHmiProgressBar) {
            class TcHmiProgressBarControl extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_JB_TcHmiProgressBar_JB_TcHmiProgressBarControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    this.__elementProgressDiv = this.__elementTemplateRoot.find('.jb-tchmiprogressbar-progress');
                    this.__elementProgressBarDiv = this.__elementTemplateRoot.find('.jb-tchmiprogressbar-bar');
                    this.__elementLabelDiv = this.__elementTemplateRoot.find('.jb-tchmiprogressbar-label');
                    this.__elementAnimation = this.__elementTemplateRoot.find('.jb-tchmiprogressbar-animation');
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
                //ProgressBar Properties
                getValue() {
                    return this.__value;
                }
                setValue(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("Value");
                    }
                    if (tchmi_equal(this.__value, convertedValue))
                        return;
                    //save the new value
                    this.__value = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getValue"]);
                    //Process the new Value
                    this.__processValue();
                }
                getMin() {
                    return this.__min;
                }
                setMin(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("Min");
                    }
                    if (tchmi_equal(this.__min, convertedValue))
                        return;
                    //save the new value
                    this.__min = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getMin"]);
                    //Process the new Value
                    this.__processValue();
                }
                getMax() {
                    return this.__max;
                }
                setMax(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("Max");
                    }
                    if (tchmi_equal(this.__max, convertedValue))
                        return;
                    //save the new value
                    this.__max = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getMax"]);
                    //Process the new Value
                    this.__processValue();
                }
                getLabel() {
                    return this.__label;
                }
                setLabel(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("Label");
                    }
                    if (tchmi_equal(this.__label, convertedValue))
                        return;
                    //save the new value
                    this.__label = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getLabel"]);
                    //Process the new Value
                    this.__processLabel();
                }
                getLabelFontSize() {
                    return this.__labelFontSize;
                }
                setLabelFontSize(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("LabelFontSize");
                    }
                    if (tchmi_equal(this.__labelFontSize, convertedValue))
                        return;
                    //save the new value
                    this.__labelFontSize = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getLabelFontSize"]);
                    //Process the new Value
                    this.__processFontSize();
                }
                //Color Properties
                getLabelColor() {
                    return this.__labelColor;
                }
                setLabelColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__labelColor = this.getAttributeDefaultValueInternal("LabelColor");
                    }
                    else {
                        // @ts-ignore
                        this.__labelColor = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getLabelColor"]);
                    this.__processLabelColor();
                }
                getProgressBackgroundColor() {
                    return this.__progressBackgroundColor;
                }
                setProgressBackgroundColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__progressBackgroundColor = this.getAttributeDefaultValueInternal("ProgressBackgroundColor");
                    }
                    else {
                        // @ts-ignore
                        this.__progressBackgroundColor = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getProgressBackgroundColor"]);
                    this.__processProgressBackgroundColor();
                }
                getProgressBarColor() {
                    return this.__progressBarColor;
                }
                setProgressBarColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__progressBarColor = this.getAttributeDefaultValueInternal("ProgressBarColor");
                    }
                    else {
                        // @ts-ignore
                        this.__progressBarColor = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getProgressBarColor"]);
                    this.__processProgressBarColor();
                }
                //Methods
                __processValue() {
                    //Calculate
                    let limitValue = Math.min(Math.max(this.__value, this.__min), this.__max);
                    let percent = ((limitValue - this.__min) * 100 / (this.__max - this.__min));
                    //Set % Width of the bar depending on min, max and value
                    $(this.__elementProgressBarDiv).css("width", percent + "%");
                    //Hide Animation if progressbar is 100%
                    if (limitValue == this.__max) {
                        $(this.__elementAnimation).css("visibility", "hidden");
                    }
                    else {
                        $(this.__elementAnimation).css("visibility", "visible");
                    }
                }
                __processLabel() {
                    //Update value for data-label
                    $(this.__elementLabelDiv).attr("data-label", this.__label);
                }
                __processFontSize() {
                    // @ts-ignore
                    $(this.__elementLabelDiv).css("font-size", this.__labelFontSize + "pt");
                }
                __processLabelColor() {
                    // @ts-ignore
                    $(this.__elementLabelDiv).css("color", this.__labelColor);
                }
                __processProgressBackgroundColor() {
                    // @ts-ignore
                    $(this.__elementProgressDiv).css("background", this.__progressBackgroundColor);
                }
                __processProgressBarColor() {
                    // @ts-ignore
                    $(this.__elementProgressBarDiv).css("background", this.__progressBarColor);
                }
            }
            TcHmiProgressBar.TcHmiProgressBarControl = TcHmiProgressBarControl;
        })(TcHmiProgressBar = Controls.TcHmiProgressBar || (Controls.TcHmiProgressBar = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiProgressBarControl', 'TcHmi.Controls.TcHmiProgressBar', TcHmi.Controls.TcHmiProgressBar.TcHmiProgressBarControl);
//# sourceMappingURL=TcHmiProgressBarControl.js.map