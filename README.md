# Lab 5 - Employés avec Firestore

Application Angular qui enregistre les employés dans Firestore et les affiche avec le bouton **Employee List**.

## Exécution

Prérequis : Node.js 20 ou 22, Java 21 (pour l'émulateur Firestore).

```bash
npm install
npm run emulators   # terminal 1 : émulateur Firestore (UI sur http://localhost:4000)
npm start           # terminal 2 : http://localhost:4200
```

## Utiliser un vrai projet Firebase

Remplacer les valeurs de `src/environments/environment.ts` par la configuration de l'application Web Firebase et mettre `useEmulator` à `false`.
