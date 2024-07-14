const fs = require('fs-extra');
const path = require('path');

const structure = {
  '.github/workflows': ['build.yml'],
  '.vscode': ['launch.json'],
  'client/src/authentication': [
    'auth.controller.ts',
    'authentication.domain.facade.ts',
    'authentication.domain.module.ts',
    'authMiddleware.js'
  ],
  'client/src/components': [
    'booking.entity.ts',
    'booking.repository.ts',
    'bookings.controller.ts',
    'bookings.module.ts',
    'bookings.service.ts',
    'BookingStatus.jsx',
    'conversation.entity.ts',
    'GoogleMapsRoute.jsx',
    'InstructionsSidebar.jsx',
    'message.entity.ts',
    'Navbar.jsx',
    'room.entity.ts',
    'user.entity.ts',
    'UserLocationMarker.jsx'
  ],
  'client/src/event': [
    'app.module.ts',
    'event.controller.ts',
    'event.service.ts',
    'events.module.ts'
  ],
  'client/src/integrations/supabase': [
    'auth.jsx',
    'index.js',
    'openapi.json',
    'supabaseClient.js'
  ],
  'client/src/pages': [
    'About.jsx',
    'BookingForm.jsx',
    'Confirmation.jsx',
    'Contact.jsx',
    'Index.jsx',
    'Payment.jsx'
  ],
  'client/src/sse': [
    'sse.controller.ts',
    'sse.module.ts'
  ],
  'client/src/towingRequest/application': [
    'towingRequest.application.event.ts',
    'towingRequest.application.module.ts'
  ],
  'client/src/towingRequest': [
    'towingRequest.controller.ts',
    'towingRequest.dto.ts',
    'towingRequestByUser.controller.ts',
    'towingRequest.domain.facade.ts',
    'towingRequest.domain.module.ts',
    'towingRequest.entity.ts'
  ],
  'client/src/user': [
    'user.domain.module.ts'
  ],
  'client/src': [
    'App.jsx',
    'main.jsx'
  ],
  'client': [
    'package-lock.json',
    'package.json',
    'tsconfig.json'
  ],
  'public': [
    'favicon.ico'
  ],
  'server/dist/core/accessControl/decorators': [
    'accessControl.role.decorator.js'
  ],
  'server/dist/core/accessControl/domain/role': [
    'accessControl.role.js',
    'accessControl.role.manager.js'
  ],
  'server/dist/core/accessControl/guards': [
    'accessControl.guard.js'
  ],
  'server/dist/core/accessControl/internal': [
    'accessControl.provider.js',
    'accessControl.service.js',
    'accessControl.type.js',
    'accessControl.validator.js'
  ],
  'server/dist/core/accessControl': [
    'accessControl.js',
    'accessControl.module.js',
    'index.js'
  ],
  'modules/userForm/application': [
    'userForm.application.event.ts',
    'userForm.application.module.ts',
    'userForm.controller.ts',
    'userForm.dto.ts',
    'userFormByUser.controller.ts'
  ],
  'modules/userForm/domain': [
    'userForm.domain.facade.ts',
    'userForm.domain.module.ts',
    'userForm.model.ts'
  ],
  'modules/vehicleForm/application': [
    'vehicleForm.application.event.ts',
    'vehicleForm.application.module.ts',
    'vehicleForm.controller.ts',
    'vehicleForm.dto.ts',
    'vehicleFormByTowServiceRequest.controller.ts'
  ],
  'modules/vehicleForm/domain': [
    'vehicleForm.domain.facade.ts',
    'vehicleForm.domain.module.ts',
    'vehicleForm.model.ts'
  ],
  'appModules': [
    'app.application.module.ts',
    'app.domain.module.ts',
    'app.infrastructure.module.ts',
    'app.migration.module.ts',
    'app.module.ts',
    'app.orchestrator.module.ts'
  ],
  'mainFiles': [
    'main.ts',
    'migration.ts'
  ],
  'configFiles': [
    '.eslintrc.js',
    '.gitignore',
    '.prettierrc',
    'docker-compose.yml',
    'nest-cli.json',
    'package-lock.json',
    'package.json',
    'Procfile',
    'tsconfig.build.json',
    'tsconfig.json'
  ],
  'rootFiles': [
    '.env',
    '.eslintrc.cjs',
    'Copy-FilesContent.ps1',
    'export-directory-tree.ps1',
    'gpt-engineer.toml',
    'index.html',
    'README.md',
    'run.sh',
    'vite.config.js'
  ]
};

async function reorganize() {
  for (const [dir, files] of Object.entries(structure)) {
    await fs.ensureDir(dir); // Crea el directorio si no existe
    for (const file of files) {
      const oldPath = path.join(file); // Ajusta esta ruta según tu estructura actual
      const newPath = path.join(dir, file);
      if (await fs.pathExists(oldPath)) {
        await fs.move(oldPath, newPath, { overwrite: true });
        console.log(`Movido: ${oldPath} -> ${newPath}`);
      } else {
        console.warn(`Archivo no encontrado: ${oldPath}`);
      }
    }
  }
}

reorganize().catch(err => {
  console.error('Error reorganizando el proyecto:', err);
});
