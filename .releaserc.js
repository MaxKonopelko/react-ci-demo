module.exports = {
  // Только с этих веток создавать релизы
  branches: ['main'],

  plugins: [
    // 1. Анализирует коммиты и определяет тип версии (major/minor/patch)
    '@semantic-release/commit-analyzer',

    // 2. Генерирует текст для Release Notes на GitHub
    '@semantic-release/release-notes-generator',

    // 3. Создаёт и обновляет файл CHANGELOG.md
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],

    // 4. Обновляет версию в package.json и коммитит CHANGELOG.md
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'package.json'],
      message: 'chore(release): ${nextRelease.version} [skip ci]',
      // [skip ci] — важно! Без этого релизный коммит снова запустит CI и будет бесконечный цикл
    }],

    // 5. Создаёт GitHub Release с тегом и описанием изменений
    '@semantic-release/github',
  ],
}