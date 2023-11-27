Early documentation for API, very much not finished :o

# /game/create

## Input
```
{
    username: str,
    theme: str,
    rounds: int
}
```
## Output
```
{
    data: {
        gameId: (generated w/ username)
    },
    ...
}
```

# /game/join
## Input
```
{
    username: str,
    gameId: str
}
```

## Output
```
# EXISTING GAME
{
    data: {
        gameId: str,
        theme: str,
        rounds: int,
        playerIds: [int],
        usernames: [str],
        scores: [int],
        status: str,
    },
    ...
}

# NONEXISTENT GAME
{
    data: {
        message: "game with GameID <gameId> does not exist!"
    }
}
```

# /game/leave-game
## Input
```
{
    playerId: int,
    gameId: str
}
```
## Output
```
{
    data: {
        message: "Game left successfully",
        gID: int
    }
}
```
