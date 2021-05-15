import inquirer from 'inquirer';
import { validateName } from '../validates.mjs';

const questions = [
    {
        type: 'input',
        name: 'childFolderName',
        message: 'Your child folder name:',
        default: 'NewComponent',
        // validate: validateName,
    },
];

export const setupChildFolder = async () => await inquirer.prompt(questions);
