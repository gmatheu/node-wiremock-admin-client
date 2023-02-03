# node-wiremock-admin-client
Humble Wiremock admin client in Node.js

Executes Wiremok's admin commands via http (https://wiremock.org/docs/api/)


## Commands

### Shutdown

Triggers Wiremock's shutdown command (https://wiremock.org/docs/api/#tag/System/paths/~1__admin~1shutdown/post)

```
wiremock-admin-client shutdown
```
or,

```
wiremock-admin-client shutdown --host localhost --port 5000
```