# Transcript

Merge two files on a new one.

Keep the keys from the first, with the values from the second.

Supports **JSON** and **YAML**.

## How it works:

So, given two files, **BASE** and **TARGET**, generates a **OUTPUT** file with

All keys from the **BASE** file that does not exists on the **TARGET**, with the **BASE** values.
All keys that exists on both, with the values of the **TARGET**.
None keys from the **TARGET** that does not exists on the **BASE**.

## To run:

```bash
node transcript.js [format] [base] [target] [output]
```

## Tools

In order to unflatten some smartling json file, run:

```bash
node smartling_unflatten_json.js [file] [output]
```
