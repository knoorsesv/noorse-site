async function getVisualDiffs() {
  return globby('cypress/snapshots/**/__diff_output__/**.png')
}
getVisualDiffs()
  .then((list) => {
    return setGitHubCommitStatus(list.length, envOptions)
  })
  .catch(onError)
