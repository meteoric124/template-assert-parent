import { Template } from 'meteor/templating';

/**
 * @param {string} template Name of the current template.
 * @param {string} parentTemplate Name of the parent that "template" parameter must be under.
 * @returns {string} The error msg.
 */
const templateParentConstraintErrorMsg = (template, parentTemplate) => {
    return `${template} template must be under ${parentTemplate}`;
};

Template.onRenderedFirst(function() {
    this.assertParent = (parentTemplate) => {
        let templateParent = this.parent(t => t.view.name == parentTemplate.viewName, true);
        if (!templateParent) {
            console.error(templateParentConstraintErrorMsg(this.view.name, parentTemplate.viewName));
        }
    };
});