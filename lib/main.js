import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

/**
 * @param {string} template Name of the current template.
 * @param {string} parentTemplate Name of the parent that "template" parameter must be under.
 * @returns {string} The error msg.
 */
const templateParentConstraintErrorMsg = (template, parentTemplate) => {
    return `${template} template must be under ${parentTemplate}`;
};

/**
 * @param {string} template Name of the current template.
 * @param {Array} parentTemplates Array of possible parent templates.
 * @returns {string} The error msg.
 */
const templateParentsConstraintErrorMsg = (template, parentTemplates) => {
    return `${template} template must be under one of the following parents: ${parentTemplates.join(', ')}`;
};

Template.onRenderedFirst(function() {
    this.assertParent = (parentTemplates) => {
        if (!_.isArray(parentTemplates)) {
            parentTemplates = [ parentTemplates ];
        } else {
            if (parentTemplates.length === 0) {
                return;  // Dont' do a thing if no templates.
            }
        }

        let parentValid = false;
        for (let parentTemplate of parentTemplates) {
            let templateParent = this.parent(t => t.view.name == parentTemplate.viewName, true);
            if (templateParent) {
                parentValid = true;
                break;
            }
        }

        if (!parentValid) {
            let parentTemplateNames = parentTemplates.map(t => t.viewName);

            if (parentTemplateNames.length == 1) {
                console.error(templateParentConstraintErrorMsg(this.view.name, parentTemplateNames[0]));
            } else {
                console.error(templateParentsConstraintErrorMsg(this.view.name, parentTemplateNames));
            }
        }
    };
});